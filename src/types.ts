export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  imageUrl: string;
  author?: string;
}

export type Category = 
  | 'Sera' 
  | 'Mikakati' 
  | 'Hotuba' 
  | 'Ziara' 
  | 'Vision' 
  | 'Uchumi' 
  | 'Maendeleo';

export interface NavItem {
  label: string;
  href: string;
}
