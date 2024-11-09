import { CustomComponentSchema } from "./custom-component.interface";
import { Rule, apply, url, applyTemplates, move, chain, mergeWith, externalSchematic, MergeStrategy } from "@angular-devkit/schematics";
import { strings, normalize } from "@angular-devkit/core";



export function customComponentGenerator(options: CustomComponentSchema): Rule {
    return () => {
        const templateSource = apply(
            url('./files'),
            [
                applyTemplates({
                    classify: strings.classify,
                    dasherize: strings.dasherize,
                    name: options.name
                }),
                move(normalize(`/${options.path}/${strings.dasherize(options.name)}`))
            ]
        );
        return chain(
            [
                externalSchematic('@schematics/angular', 'component', options),
                mergeWith(templateSource, MergeStrategy.Overwrite)
            ]
        )
    }
}