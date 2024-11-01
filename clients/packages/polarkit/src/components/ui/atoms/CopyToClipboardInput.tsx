import { CheckOutlined } from '@mui/icons-material'
import { useState } from 'react'
import Button from './Button'
import Input from './Input'

const CopyToClipboardInput = ({
  value,
  onCopy,
  buttonLabel,
  disabled = false,
}: {
  value: string
  onCopy?: () => void
  buttonLabel?: string
  disabled?: boolean
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)

    if (onCopy) {
      onCopy()
    }

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="dark:border-polar-700 dark:bg-polar-800 flex w-full flex-row items-center overflow-hidden rounded-full border bg-gray-50">
      <Input
        className="dark:text-polar-400 !focus:border-transparent !focus:ring-transparent !dark:focus:border-transparent !dark:focus:ring-transparent w-full grow border-none bg-transparent font-mono text-xs text-gray-600 focus-visible:ring-transparent dark:bg-transparent dark:focus-visible:ring-transparent"
        value={value}
        readOnly={true}
      />
      {!disabled && (
        <Button
          className="mr-0.5 text-xs"
          type="button"
          variant="ghost"
          onClick={copyToClipboard}
        >
          {isCopied ? (
            <CheckOutlined className="text-sm" fontSize="inherit" />
          ) : (
            buttonLabel || 'Copy'
          )}
        </Button>
      )}
    </div>
  )
}

export default CopyToClipboardInput
