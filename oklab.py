from dataclasses import dataclass
import math

"""oklab.py
This file was a copied code from a currently unknown source to convert okLAB colors to and from RGB

"""

@dataclass
class Lab:
    L: float
    a: float
    b: float

@dataclass
class RGB:
    r: float
    g: float
    b: float

@dataclass
class LCH:
    L: float
    c: float
    h: float

r = float(input("Enter the value for R (0.0-255.0): ").strip())
g = float(input("Enter the value for G (0.0-255.0): ").strip())
b = float(input("Enter the value for B (0.0-255.0): ").strip())

color_1 = RGB(r, g, b)

def srgb_to_linear(color: RGB) -> RGB:
    r = color.r / 255.0
    g = color.g / 255.0
    b = color.b / 255.0
    rgb_array = [r, g, b]

    for x in range(len(rgb_array)):
        if rgb_array[x] <= 0.04045:
            rgb_array[x] = rgb_array[x] / 12.92
        else:
            rgb_array[x] = ((rgb_array[x] + 0.055) / 1.055) ** 2.4

    return RGB(
        r = rgb_array[0],
        g = rgb_array[1],
        b = rgb_array[2],
    )

def linear_srgb_to_oklab(color: RGB) -> Lab:
    l = 0.4122214708 * color.r + 0.5363325363 * color.g + 0.0514459929 * color.b
    m = 0.2119034982 * color.r + 0.6806995451 * color.g + 0.1073969566 * color.b
    s = 0.0883024619 * color.r + 0.2817188376 * color.g + 0.6299787005 * color.b

    l_ = math.cbrt(l)
    m_ = math.cbrt(m)
    s_ = math.cbrt(s)

    return Lab(
        L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
        a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
        b = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    )

def oklab_to_linear_srgb(color: Lab) -> RGB:
    l_ = color.L + 0.3963377774 * color.a + 0.2158037573 * color.b
    m_ = color.L - 0.1055613458 * color.a - 0.0638541728 * color.b
    s_ = color.L - 0.0894841775 * color.a - 1.2914855480 * color.b

    l = l_ ** 3
    m = m_ ** 3
    s = s_ ** 3

    return RGB(
        r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        b = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    )

def oklab_to_oklch(color: Lab) -> LCH:
    L = color.L
    c = math.sqrt(color.a**2 + color.b**2)
    h = math.atan2(color.b, color.a) % 360

    return LCH(
        L,
        c,
        h,
    )

color_1 = srgb_to_linear(color_1)
color_2 = linear_srgb_to_oklab(color_1)
color_3 = oklab_to_oklch(color_2)

print(f"OKLab converted color:\nL:{color_3.L*100}\nc:{color_3.c*100}\nh:{color_3.h*100}")