// person.services.ts

interface Person {
    id: number;
    name: string;
    email: string;
    role?: string;
}

// Simulación de base de datos (reemplaza con tu implementación real)
let people: Person[] = [
    { id: 1, name: "William Andres Mera", email: "williamandresmera@gmail.com", role: "Líder Técnico" }
];

export class PersonService {
    
    // Obtener todas las personas
    getAll(): Person[] {
        return people;
    }
    
    // Obtener persona por ID
    getById(id: number): Person | null {
        const person = people.find(p => p.id === id);
        return person || null;
    }
    
    // Crear nueva persona
    create(personData: Omit<Person, 'id'>): Person {
        const newPerson: Person = {
            id: people.length > 0 ? Math.max(...people.map(p => p.id)) + 1 : 1,
            ...personData
        };
        
        people.push(newPerson);
        return newPerson;
    }
    
    // Actualizar persona
    update(id: number, personData: Partial<Person>): Person | null {
        const personIndex = people.findIndex(p => p.id === id);
        
        // ⭐ VERIFICAR SI EXISTE ANTES DE ACTUALIZAR
        if (personIndex === -1) {
            return null; // Persona no encontrada
        }
        
        // Actualizar solo los campos proporcionados
        people[personIndex] = {
            ...people[personIndex],
            ...personData,
            id: id // Mantener el ID original
        };
        
        return people[personIndex];
    }
    
    // Eliminar persona
    delete(id: number): boolean {
        const personIndex = people.findIndex(p => p.id === id);
        
        if (personIndex === -1) {
            return false; // Persona no encontrada
        }
        
        people.splice(personIndex, 1);
        return true;
    }
}

export default new PersonService();