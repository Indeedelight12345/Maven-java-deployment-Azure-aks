output "public_ip" {
  value = aws_instance.vm.public_ip
}

output "private_key_pem" {
  value     = tls_private_key.ssh_key.private_key_pem
  sensitive = true
}

output "ssh_connection_command" {
  value = "ssh -i private-key.pem ubuntu@${aws_instance.vm.public_ip}"
}
