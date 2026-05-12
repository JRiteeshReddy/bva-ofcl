import Papa from 'papaparse';

export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  category: string;
  featured: boolean;
}

export interface Event {
  name: string;
  date: string;
  description: string;
  image: string;
  winners: string;
}

const PROJECTS_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnHpUseSYD8UMCYSX4D0dZCmv3vHAzKz7wXzauvU-Q4wSwi0KEqwEN-qTUShtFMlaUIx16Sv-gCoiz/pub?gid=0&single=true&output=csv";
const EVENTS_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnHpUseSYD8UMCYSX4D0dZCmv3vHAzKz7wXzauvU-Q4wSwi0KEqwEN-qTUShtFMlaUIx16Sv-gCoiz/pub?gid=996529062&single=true&output=csv";

export async function fetchProjects(): Promise<Project[]> {
  try {
    // Disable cache temporarily for testing to ensure all 5 projects show up
    const response = await fetch(PROJECTS_CSV, { next: { revalidate: 0 } }); 
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    
    return parsed.data.map((row: any) => ({
      name: row.name || row.ProjectName || "",
      description: row.description || row.Description || "",
      image: row.image_url || row.ImageURL || row.image || "",
      link: row.project_link || row.Link || row.link || "#",
      category: row.category || row.Category || "General",
      featured: String(row.featured || row.Featured || "").toLowerCase().trim() === 'true',
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function fetchEvents(): Promise<Event[]> {
  try {
    const response = await fetch(EVENTS_CSV, { next: { revalidate: 0 } });
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    
    return parsed.data.map((row: any) => ({
      name: row.name || row.EventName || row.event_name || "",
      date: row.date || row.Date || row.event_date || "",
      description: row.description || row.Description || "",
      image: row.image_url || row.ImageURL || row.image || "",
      winners: row.winners || row.Winners || "",
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
