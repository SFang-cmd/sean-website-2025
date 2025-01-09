'use client';

import { jaro } from '../ui/fonts'
import { Portal } from './components/portal'

export default function Page() {
    return (
        <div className={`fixed inset-0 text-8xl ${jaro.className}`}>
            <Portal />
        </div>
    )
}