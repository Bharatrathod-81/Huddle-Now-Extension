import tw from "tailwind-styled-components";

export const InsightWrapper = tw.div`

flex
flex-col
gap-5
pt-10

`
export const TitleWrapper = tw.div`

flex
gap-5
items-start

`
export const Title = tw.p`

text-teal-600
text-lg
font-medium
leading-none

`
export const Icon = tw.div`

h-fit

`
export const Excerpt = tw.p`

text-base
text-neutral-500
pl-11

`
export const ContentList = tw.div`

flex
flex-col
gap-3.5
pl-11

`
export const ListItem = tw.p`

flex
gap-3.5
text-base
text-neutral-500

`
export const TaskList = tw.div`

border
border-dashed
border-yellow-600
bg-yellow-50
flex
flex-col
gap-3.5
ml-11
p-6
rounded

`
export const TaskItem = tw.p`

flex
gap-3.5
items-center
text-base
text-yellow-600
border
border-dashed
border-yellow-600
bg-yellow-50
p-6
rounded

`