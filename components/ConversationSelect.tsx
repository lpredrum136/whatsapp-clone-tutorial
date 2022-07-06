import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useRecipient } from '../hooks/useRecipient'
import { Conversation } from '../types'
import RecipientAvatar from './RecipientAvatar'

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 15px;
	word-break: break-all;

	:hover {
		background-color: #e9eaeb;
	}
`

const ConversationSelect = ({
	id,
	conversationUsers
}: {
	id: string
	conversationUsers: Conversation['users']
}) => {
	const { recipient, recipientEmail } = useRecipient(conversationUsers)

	const router = useRouter()

	const onSelectConversation = () => {
		router.push(`/conversations/${id}`)
	}

	return (
		<StyledContainer onClick={onSelectConversation}>
			<RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
			<span>{recipientEmail}</span>
		</StyledContainer>
	)
}

export default ConversationSelect
