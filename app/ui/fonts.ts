import Jaro from 'next/font/local'
import { Karla } from 'next/font/google'
import { Comforter } from 'next/font/google'

export const jaro = Jaro({
    src: '../fonts/Jaro.ttf'
});

export const karla = Karla({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "700"],
});

export const comforter = Comforter({
    subsets: ["latin"],
    weight: "400"
});