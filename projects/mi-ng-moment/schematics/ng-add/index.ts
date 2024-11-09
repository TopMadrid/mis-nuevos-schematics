import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { NodeDependency, NodeDependencyType, addPackageJsonDependency } from "@schematics/angular/utility/dependencies";


export function ngAdd(): Rule{
    return (tree: Tree, context: SchematicContext) =>{ //Contex da y pide informacion al usuario, ejecutar tareas...
        context.logger.info('Instalando dependencias ...'); // Mensaje como console.log

        // En este parte incluimos el codigo para que se instale moment
        const dep: NodeDependency = {
            type: NodeDependencyType.Dev,
            name: 'moment',
            version: '2.30.0',
            overwrite: true
        };

        addPackageJsonDependency(tree, dep);
        //Fin del código para que se instale moment

        context.addTask(new NodePackageInstallTask()); //Instala npm install
        return tree; //Contiene nuestro sistema de archivos del proyecto

    }
}
