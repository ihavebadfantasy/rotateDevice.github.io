export function createSVG(viewBox: string, id: string, style: string, innerContent: string) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/','xmlns:xlink','http://www.w3.org/1999/xlink');
  svg.setAttribute('id',`${id}`);
  svg.setAttribute('viewBox',`${viewBox}`);
  svg.setAttribute('style',`${style}`);
  svg.innerHTML = innerContent;
  return svg;
}
