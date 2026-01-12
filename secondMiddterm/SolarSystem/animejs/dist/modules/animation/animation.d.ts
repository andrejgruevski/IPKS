export class JSAnimation extends Timer {
    /**
     * @param {TargetsParam} targets
     * @param {AnimationParams} parameters
     * @param {Timeline} [parent]
     * @param {Number} [parentPosition]
     * @param {Boolean} [fastSet=false]
     * @param {Number} [index=0]
     * @param {Number} [length=0]
     */
    constructor(targets: TargetsParam, parameters: AnimationParams, parent?: Timeline, parentPosition?: number, fastSet?: boolean, index?: number, length?: number);
    /** @type {TargetsArray} */
    targets: TargetsArray;
    /** @type {Callback<this>} */
    onRender: Callback<this>;
    /** @type {EasingFunction} */
    _ease: EasingFunction;
    /**
     * @param  {Number} newDuration
     * @return {this}
     */
    stretch(newDuration: number): this;
    /**
     * @return {this}
     */
    refresh(): this;
    /**
     * Cancel the animation and revert all the values affected by this animation to their original state
     * @return {this}
     */
    revert(): this;
    /**
     * @typedef {this & {then: null}} ResolvedJSAnimation
     */
    /**
     * @param  {Callback<ResolvedJSAnimation>} [callback]
     * @return Promise<this>
     */
    then(callback?: Callback<this & {
        then: null;
    }>): Promise<any>;
}
export function animate(targets: TargetsParam, parameters: AnimationParams): JSAnimation;
import { Timer } from '../timer/timer.js';
import type { TargetsArray } from '../types';
import type { Callback } from '../types';
import type { EasingFunction } from '../types';
import type { TargetsParam } from '../types';
import type { AnimationParams } from '../types';
import type { Timeline } from '../timeline/timeline.js';
