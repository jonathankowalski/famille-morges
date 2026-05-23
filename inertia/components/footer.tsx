export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-lg text-foreground mb-2">
          Espace Famille Morges
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          © {currentYear} Association Espace Famille Morges. Tous droits réservés.
        </p>
        <a
          href="mailto:contact@espacefamille-morges.ch"
          className="text-sm text-primary hover:underline"
        >
          contact@espacefamille-morges.ch
        </a>
      </div>
    </footer>
  );
}
