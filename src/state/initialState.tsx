export interface Note {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  isArchived: boolean;
}

export interface NoteList extends Array<Note> {}

export const noteCategories = ["Task", "Random Thought", "Idea"];

let id = 11;
export function getNextId() {
  return ++id;
}

const initialState: NoteList = [
  {
    id: 1,
    name: "Shopping List",
    created: "May 05,2021",
    category: "Task",
    content: "Tomatoes,bread",
    dates: "",
    isArchived: false,
  },

  {
    id: 2,
    name: "The theory of evolution",
    created: "May 15,2021",
    category: "Random Thought",
    content: "evolution is cool",
    dates: "",
    isArchived: false,
  },

  {
    id: 3,
    name: "New Feature",
    created: "June 11,2021",
    category: "Idea",
    content: "implement new interesting feature till 3/5/2022",
    dates: "3/5/2022",
    isArchived: false,
  },

  {
    id: 4,
    name: "Books",
    created: "December 15,2021",
    category: "Task",
    content: "The Lean Startup",
    dates: "",
    isArchived: false,
  },

  {
    id: 5,
    name: "Weather",
    created: "July 3,2021",
    category: "Random Thought",
    content: "It's a really nice and sunny day!",
    dates: "",
    isArchived: false,
  },

  {
    id: 6,
    name: "Dishes",
    created: "January 22,2021",
    category: "Task",
    content: "Time to do it",
    dates: "",
    isArchived: false,
  },

  {
    id: 7,
    name: "Party",
    created: "May 2,2021",
    category: "Idea",
    content: "at my place 3/13/2021",
    dates: "3/13/2021",
    isArchived: false,
  },

  {
    id: 8,
    name: "Party",
    created: "May 2,2021",
    category: "Idea",
    content: "at my place 3/13/2021",
    dates: "3/13/2021",
    isArchived: true,
  },

  {
    id: 9,
    name: "Party",
    created: "May 2,2021",
    category: "Task",
    content: "at my place 3/13/2021",
    dates: "3/13/2021",
    isArchived: true,
  },

  {
    id: 10,
    name: "Party",
    created: "May 2,2021",
    category: "Random Thought",
    content: "at my place 3/13/2021",
    dates: "3/13/2021",
    isArchived: true,
  },

  {
    id: 11,
    name: "Party",
    created: "May 2,2021",
    category: "Idea",
    content: "at my place 3/13/2021",
    dates: "3/13/2021",
    isArchived: true,
  },
];

export default initialState;
