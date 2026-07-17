import { preloadModule } from 'react-dom';

const DASHBOARD_BRIDGE_SCRIPT = 'https://core.sanity-cdn.com/bridge.js';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  preloadModule(DASHBOARD_BRIDGE_SCRIPT, { as: 'script' });

  return (
    <div className="fixed inset-0 z-[9999] bg-white text-black">
      <script src={DASHBOARD_BRIDGE_SCRIPT} async type="module" />
      {children}
    </div>
  ); 
}
