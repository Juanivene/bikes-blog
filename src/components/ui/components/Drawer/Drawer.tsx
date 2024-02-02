'use client';

import IconButton from '../IconButton/IconButton';
import { MdClose } from 'react-icons/md';
import { Drawer as VaulDrawer } from 'vaul';

import { cn } from '@/utilities';

import { DTI, DTI_LIST } from '@/dti';

import type { DrawerPropsType } from './Drawer.types';

/**
 * A custom Drawer component.
 *
 * @param props - The component props.
 * @param className - Additional class names to apply to the icon container.
 * @param title - Drawer's title
 * @param trigger - Button that will open the drawer
 * @returns JSX.Element The rendered Icon component.
 *
 * ```
 * @example
 *
 * - Standalone usage:
 * <Drawer title="some title" trigger={<SomeButton />} >Some content</Drawer>
 * ```
 */

const Drawer = (props: DrawerPropsType): JSX.Element => {
  const { children, className = '', title = '', trigger } = props;

  return (
    <VaulDrawer.Root>
      <VaulDrawer.Trigger asChild>{trigger}</VaulDrawer.Trigger>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
        <VaulDrawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 max-h-[100%] rounded-t-[10px] bg-white dark:bg-zinc-700">
          <div className={cn('mb-3 rounded-t-[10px]', className)}>
            <header className="container mx-auto mb-2 flex items-center justify-between px-4 py-3">
              <VaulDrawer.Title className="text-xl">{title}</VaulDrawer.Title>
              <VaulDrawer.Close>
                <IconButton
                  colorDark="dark:bg-transparent"
                  colorLight="bg-transparent"
                  dti={DTI(DTI_LIST.BUTTON('close'))}
                  iconComponent={<MdClose />}
                />
              </VaulDrawer.Close>
            </header>
            <main className="mx-auto px-4">{children}</main>
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
};

export default Drawer;
