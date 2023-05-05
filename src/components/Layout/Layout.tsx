import LayoutComponent from "./LayoutComponent";

const Layout = (props: any) => {

    const args = {
        
    }
    return <LayoutComponent {...args}>{props.children}</LayoutComponent>
}

export default Layout;