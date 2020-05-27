# Particore

Simplified particle type generation for GameMaker: Studio and GameMaker: Studio 2

## Download and Install

Download the [latest release](https://github.com/gm-core/particore/releases/download/v1.0.0/particore-1-0-0.yymp) and import into GameMaker Studio.

Browse older releases and source downloads on the [releases page](https://github.com/gm-core/particore/releases)

For instructions on importing yymp files, see [Installing .yymp Packages](/installing.html)

## What Particore Does

Particore is largely a convenience wrapper around the `part_type` functions. The `part_type` functions require you to always provide the particle ID you want to customize, and require a lot of arguments, which can often be useless. Particore wraps these functions to provide a quick control flow as well as reasonable defaults for most of these values, so that you only specify what you need to.

Example:

```gml
// Create a new particle and mark it as the active particle type
partType = pt_new();

// Set some properties on this particle type!
pt_color(c_red);
pt_speed(2, 5);
pt_sprite(spr_particle);
pt_direction(PT.Any);
pt_orientation(PT.Relative);
pt_life(60, 120);
```

### Defaulting

Since Particore allows you to omit most arguments, it uses a defaulting strategy that is as follows:

1. For `min` and `max` values, omitting the max sets it to the min value.
2. For boolean values, the default is false.
3. For numeric values (besides min/max), the default is 0. (Few exceptions)
4. For particle functions with a `2` and `3` version (`color` and `alpha`), argument count determines which function is used.

