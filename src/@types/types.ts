export interface Location {
  city: string;
  state: string;
}

export interface CarnivalGroup {
  image: string;
  title: string;
  description: string;

  city: string;
  abbreviation: string;
}

export interface SearchFields {
  title: string;
  city: string;
}
