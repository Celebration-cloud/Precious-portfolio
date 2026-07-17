import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { CONTENT_TAGS, type ContentTag } from '../../../lib/content-tags';
import { getServerEnv } from '../../../lib/env';

const webhookSchema = z.object({
  _type: z.enum(['businessInfo', 'service', 'project', 'testimonial', 'post', 'siteSettings']),
});

const tagByType: Record<z.infer<typeof webhookSchema>['_type'], ContentTag> = {
  businessInfo: CONTENT_TAGS.businessInfo,
  service: CONTENT_TAGS.services,
  project: CONTENT_TAGS.projects,
  testimonial: CONTENT_TAGS.testimonials,
  post: CONTENT_TAGS.posts,
  siteSettings: CONTENT_TAGS.siteSettings,
};

export async function POST(request: NextRequest) {
  const secret = getServerEnv().SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { success: false, data: null, message: 'Revalidation is not configured.' },
      { status: 503 },
    );
  }

  if (request.headers.get('x-sanity-secret') !== secret) {
    return NextResponse.json(
      { success: false, data: null, message: 'Unauthorized.' },
      { status: 401 },
    );
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = webhookSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        data: parsed.error.flatten().fieldErrors,
        message: 'Invalid webhook payload.',
      },
      { status: 400 },
    );
  }

  const tag = tagByType[parsed.data._type];
  revalidateTag(tag, { expire: 0 });

  return NextResponse.json({ success: true, data: { tag }, message: 'Content revalidated.' });
}
