"""
Structured logging configuration
"""
import structlog
import logging
import sys
from config import settings


def setup_logging():
    """Configure structured logging for the application"""
    
    # Configure structlog
    structlog.configure(
        processors=[
            structlog.stdlib.filter_by_level,
            structlog.stdlib.add_logger_name,
            structlog.stdlib.add_log_level,
            structlog.stdlib.PositionalArgumentsFormatter(),
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.StackInfoRenderer(),
            structlog.processors.format_exc_info,
            structlog.processors.UnicodeDecoder(),
            structlog.processors.JSONRenderer()
        ],
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        cache_logger_on_first_use=True,
    )
    
    # Configure standard logging
    logging.basicConfig(
        format="%(message)s",
        stream=sys.stdout,
        level=getattr(logging, settings.log_level.upper()),
    )
    
    # TODO: Add file handler for persistent logging
    # TODO: Implement log rotation for production
    # TODO: Add sensitive data filtering (PII, API keys)
    # TODO: Integrate with centralized logging service (e.g., ELK, CloudWatch)
    # TODO: Add request ID tracking for distributed tracing


def get_logger(name: str):
    """Get a structured logger instance"""
    return structlog.get_logger(name)
