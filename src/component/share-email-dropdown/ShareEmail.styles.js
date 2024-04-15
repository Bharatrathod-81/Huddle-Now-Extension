import tw from "tailwind-styled-components";

export const ShareEmailCard = tw.div`

shadow-[0px_0px_32px_rgba(170,170,170,0.25)]
w-[800px]
rounded-lg
pb-5
absolute
bg-white
bottom-0

`

export const ShareEmailCardWrapper = tw.div``

export const ShareEmailCardHead = tw.div`

pb-3
px-5
pt-5
border-b
border-b-neutral-200
flex
items-center
gap-4
justify-between
mb-8

`

export const ShareViaEmailTitle = tw.div`

font-medium
text-lg
text-zinc-600

`

export const CardCloseIcon = tw.div``

export const ShareOptionWrapper = tw.div`

  flex
  items-center
  gap-3
  mb-3.5
  px-5

`

export const ShareOption = tw.div`

  py-2
  pl-3.5
  pr-5
  border
  border-[#E5E7EB]
  rounded-full
  flex
  items-center
  gap-2.5
  cursor-pointer

`

export const CheckBox = tw.div`

  h-6
  w-6
  border
  border-[#E5E7EB]
  rounded
  relative
  before:content-['']
  before:absolute
  before:h-3
  before:w-4
  before:top-1/2 
  before:-translate-y-1/2
  before:left-1/2 
  before:-translate-x-1/2
  before:bg-center
  before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy4wNDgxIDAuMzUxNDcyQzE3LjUxNjggMC44MjAxMDEgMTcuNTE2OCAxLjU3OTkgMTcuMDQ4MSAyLjA0ODUzTDcuNDQ4MTQgMTEuNjQ4NUM2Ljk3OTUxIDEyLjExNzIgNi4yMTk3MSAxMi4xMTcyIDUuNzUxMDggMTEuNjQ4NUwwLjk1MTA4MSA2Ljg0ODUzQzAuNDgyNDUyIDYuMzc5OSAwLjQ4MjQ1MiA1LjYyMDEgMC45NTEwODEgNS4xNTE0N0MxLjQxOTcxIDQuNjgyODQgMi4xNzk1MSA0LjY4Mjg0IDIuNjQ4MTQgNS4xNTE0N0w2LjU5OTYxIDkuMTAyOTRMMTUuMzUxMSAwLjM1MTQ3MkMxNS44MTk3IC0wLjExNzE1NyAxNi41Nzk1IC0wLjExNzE1NyAxNy4wNDgxIDAuMzUxNDcyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==')]
  before:bg-no-repeat
  ${(p) => (p.isActive ? "bg-[#0F766E]" : "bg-white")}

`

export const ShareOptionText = tw.div`

  text-[#4B5563]
  text-lg

`

export const AttendeeGroupWrapper = tw.div`

px-5

`

export const AttendeesWrapper = tw.div`
  grid
  grid-cols-1
  gap-2.5
  pb-8
  px-3.5
  pt-3.5
  relative
  border
  border-[#E5E7EB]
`

export const AttendeesList = tw.div`
  flex
  flex-wrap
  items-center
  gap-5
  gap-y-2.5
  w-full
  max-h-20
  overflow-y-auto
`

export const Attendee = tw.div`
  flex
  gap-2.5
  items-center
  px-2
  py-1.5
  text-base
  rounded
  border
  border-gray-200
  bg-gray-50
  text-gray-600
  ${(p) => (p.valid ? "border-gray-200 bg-gray-50 text-gray-600" : "border-red-200 bg-red-50 text-red-600")}
`

export const AttendeesInput = tw.input`
  w-full
  outline-none
  py-2
  block
  placeholder:text-neutral-300
`

export const ShareEmailCardFooter = tw.div`

items-center
justify-end
mt-5
px-5
${(p) => ((!p.err && p.activeState) ? "flex" : "hidden")}

`

export const ShareButton = tw.div`

text-base
text-[#115E59]
py-1.4
px-2.5
cursor-pointer

`