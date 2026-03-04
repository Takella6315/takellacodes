"use client";

export default function RetroGraphic() {
  const tejaArt = `
 _____ _____   _   _   
|_   _| ____| | | / \\  
  | | |  _|   | |/ _ \\ 
  | | | |___  | / ___ \\
  |_| |_____| |_/_/   \\_\\`.trimStart();

  const akellaArt = `
    _    _  _______ _      _        _    
   / \\  | |/ / ____| |    | |      / \\   
  / _ \\ | ' /|  _| | |    | |     / _ \\  
 / ___ \\| . \\| |___| |___ | |___ / ___ \\ 
/_/   \\_\\_|\\_\\_____|_____|_____/_/   \\_\\`.trimStart();

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4">
      <div className="relative rounded-lg border-2 border-primary/60 bg-black/95 retro-glow overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-primary/40 bg-primary/15 px-4 py-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <span className="text-primary/90 text-xs font-mono ml-3 tracking-widest">
            takella@terminal:~$
          </span>
        </div>

        {/* Main content */}
        <div className="relative py-6 px-4 md:py-8 md:px-8 scanlines min-h-[280px] md:min-h-[380px] flex flex-col items-center justify-center">
          {/* TEJA - row 1 */}
          <pre
            className="font-mono text-primary leading-tight select-none text-center w-full overflow-x-auto"
            style={{
              fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', 'SF Mono', monospace",
              fontSize: "clamp(0.55rem, 1.8vw, 0.85rem)",
            }}
            aria-hidden
          >
            {tejaArt}
          </pre>

          {/* AKELLA - row 2 */}
          <pre
            className="font-mono text-primary leading-tight select-none text-center w-full overflow-x-auto mt-2"
            style={{
              fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', 'SF Mono', monospace",
              fontSize: "clamp(0.55rem, 1.8vw, 0.85rem)",
            }}
            aria-hidden
          >
            {akellaArt}
          </pre>

          {/* Terminal commands */}
          <pre
            className="font-mono text-primary text-sm sm:text-base leading-relaxed select-none overflow-x-auto text-center md:text-left w-full mt-6"
            style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', 'SF Mono', monospace" }}
            aria-hidden
          >
            {`$ cat intro.txt\nTeja Akella\n\n$ cat tags\n[ cybersecurity · security research · ai ]\n[ Georgia Tech · CyFI Lab · NASA]`}
          </pre>
        </div>

        {/* Bottom cursor */}
        <div className="border-t border-primary/40 px-4 py-2 flex items-center gap-2 font-mono text-xs text-primary/60">
          <span className="animate-pulse">▌</span>
          <span>connection secure</span>
        </div>
      </div>
    </div>
  );
}