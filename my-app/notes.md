# Notas sobre el proyecto.


#### Notas generales sobre npm
 + crear programa ``` npm create-react-app name --template typescript```
+ para empezar el programa: ```npm start```



#### Notas Typescript

+ variables:
    + las variables se declaran con su tipo, no como en JS:
    ```ts
        let isStudent: boolean;
        let hobbies: string[];
        let role: [number, string];
        let person: Object;
    ```

+ types & interfaces:
    ```ts
        type Person = {
            name: string;
            age: number;
            optional?: string; // variables opcionales
        }

        let person: Person = {
            name: "Nombre",
            age: 5,
        }

        let lotsOfPeople: Person[];
    ```

    + Uniones: declarar variables multi-tipo.
    ```ts
    let variable : string | any; // any reemplaza a cualquier valor, no es muy recomendado.
    let variable2: unknown; // una mejor forma de declararlo.
    ```
    + interfaces
    ```ts
    interface Animal = {
        numeroPatas: number;
        haveCola: boolean;
    };
    // tipo implementando interfaz
    type Gato = Animal & { // implementar interfaces
        orejas : number;
        havePelo : boolean;
    };
    // interfaz implementando interfaz:
    interface Cuadrupedo extends Animal {
        prop1: string;
        prop2: boolean;
    };

    // ejemplo de instancia
    let gato: Gato = {
        numeroPatas = 4,
        haveCola = true,
        orejas = 2,
        havePelo = false,
        
    }

    ```



+ funciones:
    ```ts
    let printName: Function; // definir el tipo de la funcion, hay mejores formas.
    let printName: (name: string) => void; // forma mas correcta, con tipo de entrada y salida.
    let printName: (name: string) => never; // void retorna undefined, never no retorna nada. 

    function doSomething(x: string) {
        console.log(x);
    }
    ```


#### Extensiones:
##### ES7 + React/Redux/React-Native snippets
 + ```rafce```: react arrow function export component (crea un componente real quick)



#### Documentacion importante:
 + BEM Naming Convention: https://getbem.com/naming/


#### Thinking in React
 + Encapsular UI en Componentes.
 + los componentes grandes deben ser separados lo mas posible.
 + Componente ```<App/>``` es inyectado en el ```index.html```
 + Se crea un arbol de componentes, (virtual DOM)
 + Cada componente tiene sus propias variables y data (states).
 + states: data que cuando cambia, reconstruye el componente y reconstruye los componentes hijos.
 + ser inteligente con el uso de state: si se desea que un componente se renderice, se guarda el state dentro de él. así no afecta al resto de componentes padres. 
 + entre menos states se manejen en los componentes más altos, menos rederizados se realizan.


##### UseEffect con un empty array al final: simula un ComponentDidMount, ejecuta solo cuando carga por primera vez el componente