'use client';

import { CommandPaletteProvider } from '@/components/context/command-palette-context';
import { HotkeyProviderWrapper } from '@/components/providers/hotkey-provider-wrapper';
import { dexieStorageProvider } from '@/lib/idb';
import { SWRConfig } from 'swr';

export default function Layout({ children }: { children: React.ReactNode }) {
  const gradientStyle = {
    background: `linear-gradient(60deg, #ff6b6b, #e85ea2, #c86dd7, #9179e0, #5a8de9, #4aa3f7)`,
  }
  return (
    <HotkeyProviderWrapper>
      <CommandPaletteProvider>
        <div className="flex h-screen w-screen overflow-hidden gradientStyle">
          <SWRConfig
            value={{
              provider: typeof window !== 'undefined' ? dexieStorageProvider : undefined,
              revalidateOnFocus: false,
              revalidateIfStale: false,
              shouldRetryOnError: false,
            }}
          >
            {children}
          </SWRConfig>
        </div>
      </CommandPaletteProvider>
    </HotkeyProviderWrapper>
  );
}
