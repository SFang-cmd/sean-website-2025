'use client';

import { jaro } from '../ui/fonts'
import { Portal } from './components/portal'

export default function Page() {
    return (
        <div className={`fixed inset-0 ${jaro.className}`}>
            <Portal />
        </div>
    )
}