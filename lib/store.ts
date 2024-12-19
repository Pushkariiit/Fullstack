import { create } from 'zustand';
import { mockStudents } from './mock-data';

interface Student {
  id: string;
  name: string;
  cohort: string;
  courses: string[];
  dateJoined: string;
  lastLogin: string;
  status: 'active' | 'inactive';
}

interface StudentStore {
  students: Student[];
  loading: boolean;
  error: string | null;
  fetchStudents: () => void;
  addStudent: (student: Omit<Student, 'id'>) => void;
  updateStudent: (id: string, data: Partial<Student>) => void;
}

export const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  loading: false,
  error: null,
  fetchStudents: () => {
    set({ loading: true });
    // Simulate API call with mock data
    setTimeout(() => {
      set({ students: mockStudents, loading: false });
    }, 500);
  },
  addStudent: (student) => {
    set((state) => ({
      students: [...state.students, { ...student, id: String(state.students.length + 1) }],
    }));
  },
  updateStudent: (id, data) => {
    set((state) => ({
      students: state.students.map((student) =>
        student.id === id ? { ...student, ...data } : student
      ),
    }));
  },
}));