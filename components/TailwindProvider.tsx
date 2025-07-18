import { useColorScheme } from '@/hooks/useColorScheme';
import { TailwindProvider as NativeTailwindProvider } from 'tailwindcss-react-native';

interface TailwindProviderProps {
  children: React.ReactNode;
}

export function TailwindProvider({ children }: TailwindProviderProps) {
  const colorScheme = useColorScheme();
  
  return (
    <NativeTailwindProvider
      initialColorScheme={colorScheme}
      // You can customize the theme here if needed
    >
      {children}
    </NativeTailwindProvider>
  );
} 