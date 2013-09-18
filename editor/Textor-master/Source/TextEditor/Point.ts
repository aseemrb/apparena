module Textor
{
	export class Point
	{
		public x: number;
		public y: number;

		constructor(x: number, y: number)
		{
			this.x = x;
			this.y = y;
		}

		public equals(point: Point) : bool
		{
			return ((this.x === point.x) && (this.y === point.y));
		}
	}
}
