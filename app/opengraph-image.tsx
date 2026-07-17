import { ImageResponse } from 'next/og';

export const alt = 'PEC Media Production — Creative Media & Digital Solutions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#020617',
        color: 'white',
        padding: 80,
      }}
    >
      <div style={{ color: '#60a5fa', fontSize: 30, fontWeight: 700 }}>PEC MEDIA PRODUCTION</div>
      <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>
        Creative media that brings your vision to life.
      </div>
      <div style={{ color: '#cbd5e1', fontSize: 28, marginTop: 32 }}>
        Video · Photography · Design · Cinematography
      </div>
    </div>,
    size,
  );
}
