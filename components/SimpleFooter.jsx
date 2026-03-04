export default function SimpleFooter() {
  return (
    <footer className="border-t border-border/40 mt-auto">
      <div className="max-w-2xl mx-auto px-6 py-6 text-center text-sm text-muted-foreground">
        <a href="mailto:takella6315@gmail.com" className="hover:text-foreground transition-colors">
          takella6315@gmail.com
        </a>
        <span className="mx-2">·</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
