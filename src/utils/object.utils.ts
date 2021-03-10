/**
 * @company: Osvaldo.sa
 * @author: Osvaldo López Ruiz
 * @contributors:
 */
export class ObjectUtils {
  /**
   * @author: Osvaldo López Ruiz
   * @contributors:
   * @description: tiene la responsabilidad de extraer los elementos del objeto.
   */
  static getObjectValues(obj: any) {
    return Object.keys(obj).map(i => obj[i]);
  }
}