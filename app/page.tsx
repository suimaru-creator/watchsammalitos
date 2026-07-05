import { ExternalLink, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StreamPlayer } from '@/components/stream-player'
import { StreamChat } from '@/components/stream-chat'

const CHANNEL = 'sammalitos'

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:py-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Radio className="size-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-balance text-xl font-bold leading-tight sm:text-2xl">
              {CHANNEL}
            </h1>
            <p className="text-sm text-muted-foreground">Live on Kick</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Streaming
          </span>
          <Button
            nativeButton={false}
            render={
              <a
                href={`https://kick.com/${CHANNEL}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Open on Kick
            <ExternalLink className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </header>

      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <div className="flex flex-col gap-4">
          <StreamPlayer channel={CHANNEL} />
          <div className="rounded-xl border border-border bg-card p-4">
            <h2 className="text-base font-semibold text-card-foreground">
              About this stream
            </h2>
            <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              You&apos;re watching {CHANNEL} live from Kick. If the player is
              black, the channel may be offline right now — check back soon or
              open the channel on Kick for the full experience.
            </p>
          </div>
        </div>

        <div className="lg:h-[calc(100%-0px)]">
          <StreamChat channel={CHANNEL} />
        </div>
      </div>

      <footer className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
        Stream and chat embedded from{' '}
        <a
          href={`https://kick.com/${CHANNEL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          kick.com/{CHANNEL}
        </a>
      </footer>
    </main>
  )
}
