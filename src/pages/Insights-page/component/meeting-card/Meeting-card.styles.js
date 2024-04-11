import tw from "tailwind-styled-components";

export const CardWrapper = tw.div`

border
rounded
p-3.5
flex
flex-col
gap-3.5
mb-2
cursor-pointer
${(p)=> p.active ? "border-teal-600 bg-teal-50 text-teal-600 font-medium" : "border-neutral-200 text-neutral-500 font-normal"}

`
export const Title = tw.p`

text-sm

`
export const Time = tw.p`

text-xs
text-teal-600
font-normal

`