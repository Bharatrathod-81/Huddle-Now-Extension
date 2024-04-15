import tw from "tailwind-styled-components";

export const Wrapper = tw.div`

h-screen
w-screen
flex
justify-center
items-center
dark:bg-gray-800

`
export const Logo = tw.div`

w-full
flex
justify-center
items-center
mb-10

`
export const FormWrapper = tw.div`

w-[400px]
flex
flex-col
gap-48

`
export const Form =tw.form`

`
export const Title = tw.p`

text-2xl
font-medium
text-neutral-600
dark:text-neutral-200
text-center
mb-2.5

`
export const Excerpt = tw.p`

text-base
font-normal
text-neutral-400
text-center
mb-10

`
export const Description = tw.p`

text-base
font-normal
text-neutral-600
dark:text-neutral-400
text-center
mb-10

`
export const Inputfield = tw.input`

px-5
w-full
py-3
rounded
text-base
focus:outline-none
border
text-neutral-600
placeholder:text-neutral-400
placeholder:text-sm
leading-none
border-neutral-200

`
export const Error = tw.p`

text-red-400
text-sm
mt-1
leading-none

`
export const Label = tw.p`

text-sm
text-neutral-400
mb-1

`
export const Button = tw.button`

w-full
mt-5
py-3.5
px-auto
flex
justify-center
items-center
gap-2
bg-teal-600
rounded
cursor-pointer

`
export const Icon = tw.div`

h-fit

`
export const ButtonText = tw.p`

text-lg
font-medium
text-white
leading-none

`
export const Note = tw.p`

text-neutral-400
text-sm
text-center

`
export const Link = tw.a`

underline
cursor-pointer

`
export const SocialLogin = tw.div`

flex
gap-5
justify-center
items-center

`
export const SocialIcon = tw.div`

border
border-neutral-200
dark:border-neutral-700
py-2.5
px-5
flex
gap-2.5
justify-center
items-center
text-basse
font-medium
text-neutral-600
dark:text-neutral-200
flex-1
rounded
cursor-pointer

`
export const Resend = tw.a`

text-teal-600
font-medium
cursor-pointer
underline

`