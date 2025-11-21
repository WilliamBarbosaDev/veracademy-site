export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface Area {
  title: string;
  desc: string;
  // Icon type handled in component for simplicity in this structure
}