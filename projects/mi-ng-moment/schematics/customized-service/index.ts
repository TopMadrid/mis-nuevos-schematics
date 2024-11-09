import {
    MergeStrategy,
    Rule,
    apply,
    applyTemplates,
    chain,
    mergeWith,
    move,
    strings,
    url,
  } from "@angular-devkit/schematics";
 
  import { normalize } from "@angular-devkit/core";
import { CustomizedServiceSchema } from "./customized-service.interface";
  
  export function main(options: CustomizedServiceSchema): Rule {
    return () => {
      const templateSource = apply(url("./files"), [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name,
        }),
        move(normalize(`/${options.path}/${strings.dasherize(options.name)}`)),
      ]);
  
      return chain([      
        mergeWith(templateSource, MergeStrategy.Overwrite),
      ]);
    };
  }
  