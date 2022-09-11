declare module '*.svg' {
    const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default value
}
//[TS] TypeScript가 SVG 파일을 import하지 못하여 에러가 발생할 때
//https://tesseractjh.tistory.com/227

// declare module '*.svg' {
//     import React = require('react')
//     export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
//     const src: string
//     export default src
// }
//ts svg https://choi95.tistory.com/206
//타입스크립트 상에서 svg 파일을 컴포넌트로서 import할 때 문제
