import tw from "tailwind-styled-components";


export const SideBarWrapper = tw.div`

w-fit
h-screen
bg-teal-600
flex
justify-between
flex-col
items-center
py-7
px-5

`

export const SideBarColTop = tw.div``

export const SideBarIcon = tw.div`

mb-9

`

export const SideBarNav = tw.div`

flex
items-center
gap-5
flex-col

`

export const SideBarNavLink = tw.div`

text-center

`

export const SideBarNavLinkText = tw.div`

text-teal-100
text-sm

`

export const SideBarColBottom = tw.div`

relative

`

export const SideBarProfileWrapper = tw.div`

cursor-pointer

`

export const SideBarProfileDropdownWrapper = tw.div`

absolute
bg-white
w-min-[200px]
w-fit
left-[40px]
bottom-0
rounded
shadow-[0px_0px_20px_rgba(102,102,102,0.1)]
border-neutral-100

`

export const SideBarDropdownEmailField = tw.div`

py-3
px-5
flex
items-center
gap-2.5
border-b
border-neutral-100

`

export const SideBarDropdownSignoutField = tw.div`

py-3
px-5
flex
items-center
gap-2.5
cursor-pointer
hover:bg-neutral-100

`

export const SideBarDropdownEmailText = tw.div`

text-base
text-neutral-400

`

export const SideBarDropdownSignOutText = tw.div`

text-base
text-neutral-500`