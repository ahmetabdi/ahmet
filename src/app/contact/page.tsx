import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Contact',
  description: '',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Contact"
      intro=""
    >
      <div className="space-y-20">
          <Tool title="">
            Ahmet Abdi<br />
            RED POTION LTD<br/>
            334 Malden Road<br/>
            New Malden<br/>
            Surrey<br/>
            KT3 6AU<br/>
            London, United Kingdom<br/>
            Email: redpotion@ahmet.pro
          </Tool>
      </div>
    </SimpleLayout>
  )
}
