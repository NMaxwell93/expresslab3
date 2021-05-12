import Assignment from "./assignment";

export const assignments: Assignment[] = [
  {
    id: 1,
    name: "Mid-Term",
    completed: true,
    total: 50,
    score: 42,
  },
  {
    id: 2,
    name: "Biology",
    completed: true,
    total: 70,
    score: 27,
  },
  {
    id: 3,
    name: "Gym",
    completed: false,
    total: 30,
    score: 0,
  },
  {
    id: 4,
    name: "History",
    completed: true,
    total: 57,
    score: 24,
  },
];

let nextId = 5;

export const pushAssignment = (assignment: Assignment): void => {
  assignment.id = nextId;
  nextId++;
  assignments.push(assignment);
};

export function assignmentById(id: number): Assignment | undefined {
  return assignments.find((assignment) => assignment.id === id);
}

export function updateAssignment(assignment: Assignment): boolean {
  const index = assignments.findIndex((a) => a.id === assignment.id);
  if (index == -1) {
    return false;
  } else {
    assignments[index] = assignment;
    return true;
  }
}

export function deleteAssignment(id: number): boolean {
  const index = assignments.findIndex((assignment) => assignment.id === id);
  if (index == -1) {
    return false;
  } else {
    assignments.splice(index, 1);
    return true;
  }
}
