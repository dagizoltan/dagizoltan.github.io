import React from 'react'
import moment from 'moment'


import ThemeProvider from './theme/ThemeProvider'
import PaletteProvider from './theme/palette/PaletteProvider'

import { CssBaseline } from '@material-ui/core'
import LocaleProvider from 'core/locale/LocaleProvider'

require('moment/locale/hu')
moment.locale('hu')

function ProviderGroup (props) {
    const { children } = props
    return (
        <PaletteProvider>
            <ThemeProvider>
                <CssBaseline>
                    <LocaleProvider>
                        {children}
                    </LocaleProvider>
                </CssBaseline>
            </ThemeProvider>
        </PaletteProvider>
    )
}

export default ProviderGroup