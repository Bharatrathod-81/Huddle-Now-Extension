import tw from "tailwind-styled-components";

export const InsightTranscriptHeader = tw.div`

p-5
border-b
border-b-neutral-200
flex
items-center
justify-between
gap-4

`
export const InsightTranscriptLeftWrapper = tw.div`

flex
items-center

`

export const InsightTranscriptMaximizeIcon = tw.div`

cursor-pointer

`

export const InsightTranscriptHead = tw.div`

pl-5
ml-5
relative
before:absolute
before:content-['']
before:h-6
before:w-[1px]
before:bg-neutral-200
before:left-0
before:top-1/2
before:-translate-y-1/2


`

export const InsightTranscriptTitle = tw.div`

text-lg
font-medium
text-teal-600
text-ellipsis
overflow-hidden

`

export const InsightTranscriptTime = tw.div`

text-base
text-zinc-400

`

export const InsightTranscriptRightWrapper = tw.div`

text-lg
font-medium
text-blue-500
whitespace-nowrap
cursor-pointer

`

export const ViewTranscriptInsightButton = tw.div`

whitespace-nowrap

`