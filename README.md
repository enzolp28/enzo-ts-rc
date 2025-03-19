# enzo-ts-rc

Une bibliothèque de composants React construite avec TypeScript, fournissant des composants UI réutilisables pour vos applications React.

## Installation

```bash
npm install enzo-ts-rc
```

## Utilisation

```tsx
import { Modal } from 'enzo-ts-rc';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Modal 
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Exemple de Modal"
      message="Ceci est un exemple de boîte de dialogue modale"
    />
  );
}
```

## Composants

### Modal

Un composant de boîte de dialogue modale réutilisable avec un design moderne et épuré.

#### Props

| Prop | Type | Défaut | Description |
|------|------|---------|-------------|
| isOpen | boolean | requis | Contrôle la visibilité de la modale |
| onClose | () => void | requis | Fonction à appeler pour fermer la modale |
| title | string | requis | Le titre affiché en haut de la modale |
| message | string | requis | Le message principal de la modale |


## Licence
MIT License - see the [LICENSE](LICENSE) file for details.
