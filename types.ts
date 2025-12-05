export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'copy' | 'keyboard' | 'smartphone' | 'zap' | 'printer';
  color: string;
  bgColor: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
}