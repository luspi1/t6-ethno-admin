import { type FC } from 'react'

import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import styles from './index.module.scss'

type AdminControllersProps = {
	outLink: string
	variant?: '1' | '2'
}

export const AdminControllers: FC<AdminControllersProps> = ({ outLink, variant = '1' }) => {
	if (variant === '1') {
		return (
			<section className={styles.adminControllers}>
				<AdminButton as='button' $padding='9.5px 22px' type='submit'>
					Применить и продолжить
				</AdminButton>
				<AdminButton as='link' to={outLink} $padding='9.5px 18px' $outlined>
					Сохранить и выйти
				</AdminButton>
			</section>
		)
	}

	return (
		<section className={styles.adminControllers}>
			<AdminButton as='link' to={outLink}>
				Применить и продолжить
			</AdminButton>
			<AdminButton as='button' type='submit' $outlined>
				Сохранить и выйти
			</AdminButton>
			<AdminButton className={styles.cancelBtn} as='link' to={outLink} $cancel>
				Отменить изменения
			</AdminButton>
		</section>
	)
}
