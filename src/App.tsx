import { CardContainer } from './components/CardContainer';
import { CardContent } from './components/CardContent';
import { CardHeader } from './components/CardHeader';
import { LayoutDefault } from './components/Layout';

export function App() {
  return (
    <LayoutDefault>
      <CardContainer>
        <CardHeader />
        <CardContent />
      </CardContainer>
    </LayoutDefault>
  );
}
