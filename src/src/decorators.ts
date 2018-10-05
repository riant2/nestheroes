// MethodDecorator = <T>(target: Object, key: string, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | Void;
// PropertyDecorator = (target: Object, key: string) => void;
// ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction;
// ParameterDecorator = (target: Object, propertyKey: string, parameterIndex: number) => void;

export function MySchema<T extends { new (...args: any[]) }>(
	targetClass: T,
): T {
	const privatestuff = { asdf: 'asdf' };
	const schema = class MySchemaClass extends targetClass {
		get privvy() {
			return privatestuff;
		}
	};
	// tslint:disable-next-line:no-console
	console.log({ schema });
	return schema;
}

export interface MySchemaInterface {
	privvy: {};
}
