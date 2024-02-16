import { useContext } from 'react';
import { contextNavigationPage } from '../context/NavigationPageContex';

function useNavigation() {
  const { currentComponent, setCurrentComponent } = useContext(contextNavigationPage);

  const handleNavigation = (showComponent) => {
    if (showComponent !== currentComponent) setCurrentComponent(showComponent)
  }

  return ({
    handleNavigation
  })
}

export default useNavigation