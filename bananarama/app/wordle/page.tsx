import Link from 'next/link'

export default function Wordle() {
    return (
        <Key letter='a'></Key>
    )
}

// function Keyboard() {
//     return <div><KeyRow letters={['a', 'b', 'd', 'c', 'e', 'f']}></KeyRow></div>
// }

// function KeyRow(letters: any) {
//     for (const str of letters) {
//         return <Key letter={str}></Key>
//     }
// }

function Key(letter: any) {
    return <button>{letter}</button>
}