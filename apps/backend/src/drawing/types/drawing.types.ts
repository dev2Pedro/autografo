export interface Point {
  x: number;
  y: number;
}

export interface ViewBox {
  minX: number;
  minY: number;
  width: number;
  height: number;
}

export interface RectShape {
  type: 'rect';
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface LineShape {
  type: 'line';
  from: Point;
  to: Point;
}

export interface CircleShape {
  type: 'circle';
  center: Point;
  radius: number;
}

export interface TextShape {
  type: 'text';
  position: Point;
  text: string;
  size: number;
}

export interface DimensionShape {
  type: 'dimension';
  from: Point;
  to: Point;
  offset: number;
  text: string;
}

export interface GroupShape {
  type: 'group';
  children: Shape[];
}

export type Shape =
  RectShape | LineShape | CircleShape | TextShape | DimensionShape | GroupShape;

export interface DrawingSpec {
  viewBox: ViewBox;
  shapes: Shape[];
}
