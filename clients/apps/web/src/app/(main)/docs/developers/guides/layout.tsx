import {
  DocumentationPageSidebar,
  GuidesNavigation,
  MainNavigation,
  MobileNav,
} from '@/components/Documentation/Navigation'

export const dynamic = 'force-static'
export const dynamicParams = false

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileNav activeSection="guides">
        <MainNavigation />
      </MobileNav>
      <DocumentationPageSidebar activeSection="guides">
        <GuidesNavigation />
      </DocumentationPageSidebar>
      {children}
    </>
  )
}
