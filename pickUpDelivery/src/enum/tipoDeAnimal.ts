export enum TipoDeAnimal{
	YEGUA,
	CABALLO,
	POTRILLO,
	YEGUA_PREÑADA
}

export namespace TipoDeAnimal {

	export function values() {
	  return Object.keys(TipoDeAnimal).filter(
		(type) => isNaN(<any>type) && type !== 'values'
	  );
	}
  }